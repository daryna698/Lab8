/** @typedef {import('./normalize.js').Show} Show */

/**
 * C3. Повертає новий масив серіалів, відсортований за полем `key`.
 * Специфікація — ТЗ, C3.
 *
 * @param {Show[]} shows
 * @param {'name' | 'year' | 'rating'} key
 * @param {'asc' | 'desc'} [direction]
 * @returns {Show[]}
 */
export function sortShows(shows, key, direction = 'asc') {
  const isDesc = direction === 'desc';
  return [...shows].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue === null && bValue === null) return 0;
    if (aValue === null) return 1;
    if (bValue === null) return -1;
    let compareResult = 0;
    
    if (key === 'name') {
      compareResult = aValue.localeCompare(bValue);
    } else {
      compareResult = aValue - bValue;
    }

    return isDesc ? -compareResult : compareResult;
  });
}