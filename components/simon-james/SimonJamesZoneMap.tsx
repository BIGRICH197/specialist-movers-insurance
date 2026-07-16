import zonesGeoJson from "@/data/simon-james-zones.json";

type Position = [number, number];

type GeoFeature = {
  type: "Feature";
  properties: Record<string, string>;
  geometry: {
    type: "Polygon" | "LineString";
    coordinates: Position[] | Position[][];
  };
};

/** High-contrast zone colours — readability over brand */
const ZONE_FILL: Record<string, string> = {
  A: "#2563eb",
  B: "#16a34a",
  C: "#ea580c",
  D: "#eab308",
  E: "#cbd5e1",
};

const ZONE_STROKE: Record<string, string> = {
  A: "#1e3a8a",
  B: "#14532d",
  C: "#9a3412",
  D: "#854d0e",
  E: "#475569",
};

const ZONE_RENDER_ORDER: Record<string, number> = {
  E: 0,
  D: 1,
  C: 2,
  B: 3,
  A: 4,
};

function zoneFromProperties(properties: Record<string, string>): string | null {
  for (const key of ["A", "B", "C", "D", "E"]) {
    if (key in properties) return key;
  }
  return null;
}

function ringPositions(ring: Position[]): Position[] {
  return ring.length > 1 &&
    ring[0][0] === ring[ring.length - 1][0] &&
    ring[0][1] === ring[ring.length - 1][1]
    ? ring.slice(0, -1)
    : ring;
}

function collectBounds(features: GeoFeature[]): {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
} {
  let minLon = Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  for (const feature of features) {
    if (feature.geometry.type !== "Polygon") continue;
    for (const ring of feature.geometry.coordinates as Position[][]) {
      for (const [lon, lat] of ringPositions(ring)) {
        minLon = Math.min(minLon, lon);
        maxLon = Math.max(maxLon, lon);
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
      }
    }
  }

  return { minLon, maxLon, minLat, maxLat };
}

function project(
  lon: number,
  lat: number,
  bounds: ReturnType<typeof collectBounds>,
  width: number,
  height: number,
  pad: number,
): [number, number] {
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;
  const x = pad + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * innerW;
  const y = pad + ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * innerH;
  return [x, y];
}

function ringToPath(
  ring: Position[],
  bounds: ReturnType<typeof collectBounds>,
  width: number,
  height: number,
  pad: number,
): string {
  const pts = ringPositions(ring);
  if (pts.length === 0) return "";
  return pts
    .map(([lon, lat], i) => {
      const [x, y] = project(lon, lat, bounds, width, height, pad);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ")
    .concat(" Z");
}

type ZoneShape = {
  zone: string;
  path: string;
};

function buildZoneShapes(features: GeoFeature[]): ZoneShape[] {
  const bounds = collectBounds(features);
  const width = 800;
  const height = 520;
  const pad = 28;
  const shapes: ZoneShape[] = [];

  for (const feature of features) {
    if (feature.geometry.type !== "Polygon") continue;
    const zone = zoneFromProperties(feature.properties);
    if (!zone) continue;

    for (const ring of feature.geometry.coordinates as Position[][]) {
      shapes.push({ zone, path: ringToPath(ring, bounds, width, height, pad) });
    }
  }

  return shapes;
}

const features = (zonesGeoJson as unknown as { features: GeoFeature[] }).features;
const shapes = buildZoneShapes(features);
const sortedShapes = [...shapes].sort(
  (a, b) => (ZONE_RENDER_ORDER[a.zone] ?? 0) - (ZONE_RENDER_ORDER[b.zone] ?? 0),
);

/** Eden Terrace warehouse anchor */
const EDEN_TERRACE: Position = [174.763, -36.868];
const bounds = collectBounds(features);
const [pinX, pinY] = project(EDEN_TERRACE[0], EDEN_TERRACE[1], bounds, 800, 520, 28);

export function SimonJamesZoneMap() {
  return (
    <div className="simon-james-zone-map mt-6 w-full">
      <svg
        viewBox="0 0 800 520"
        className="h-auto w-full rounded-xl border border-white/30 bg-white shadow-sm"
        role="img"
        aria-label="Simon James delivery zones A to E around Auckland"
      >
        {sortedShapes.map((shape, i) => (
          <path
            key={`${shape.zone}-${i}`}
            d={shape.path}
            fill={ZONE_FILL[shape.zone] ?? "#e2e8f0"}
            stroke={ZONE_STROKE[shape.zone] ?? "#334155"}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        ))}
        <circle cx={pinX} cy={pinY} r={8} fill="#1e293b" stroke="#ffffff" strokeWidth={2.5} />
      </svg>
      <ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/90 sm:gap-4 sm:text-sm">
        {(["A", "B", "C", "D", "E"] as const).map((zone) => (
          <li key={zone} className="flex items-center gap-2">
            <span
              className="inline-block h-3.5 w-3.5 rounded-sm border-2"
              style={{ backgroundColor: ZONE_FILL[zone], borderColor: ZONE_STROKE[zone] }}
              aria-hidden
            />
            Zone {zone}
          </li>
        ))}
      </ul>
    </div>
  );
}
