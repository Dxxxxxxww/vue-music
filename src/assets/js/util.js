function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

export function shuffle(source) {
  const arr = source.slice()
  for (let i = 0, length = arr.length; i < length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

export function formatTime(interval) {
  // | 0 向下取整
  interval = interval | 0
  const minute = (((interval / 60) | 0) + '').padStart(2, '0')
  const secondes = ((interval % 60) + '').padStart(2, '0')
  return `${minute}:${secondes}`
}
