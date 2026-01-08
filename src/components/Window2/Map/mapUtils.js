export function distance(a, b) {
  const dx = a.lat - b.lat;
  const dy = a.lng - b.lng;
  return Math.sqrt(dx * dx + dy * dy);
}

export function findNearest(point, list) {
  return list.reduce((nearest, item) => {
    if (!nearest) return item;
    return distance(point, item) < distance(point, nearest)
      ? item
      : nearest;
  }, null);
}

export function kmDistance(a, b) {
  const dx = (a.lat - b.lat) * 111;
  const dy = (a.lng - b.lng) * 111;
  return Math.sqrt(dx * dx + dy * dy);
}

export function estimateETA(distanceKm, type) {
  const SPEEDS = {
    AMBULANCE: 30,
    POLICE: 40,
    MEDICAL: 25,
    VOLUNTEER: 20,
  };

  const speed = SPEEDS[type] || 30;
  return Math.round((distanceKm / speed) * 60);
}
