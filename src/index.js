import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill'

Date.prototype.toTemporalInstant = toTemporalInstant

// const cal = Temporal.Calendar.from('iso8601')
// const date = cal.dateFromFields({ year: 2000, month: 2, day: 5 }, {})
// console.log(
// 	date.monthsInYear,
// 	date.daysInYear,
// 	date.daysInMonth,
// 	date.daysInWeek
// )

// const instant = Temporal.Now.instant()
// console.log({instant: instant.toString()})

// const date = Temporal.Instant.from('2021-01-01T00:00:00Z')
// console.log({date: date.toString()})

// const date2 = Temporal.Instant.from('2021-01-01T03:00:00Z')
// console.log({date2: date2.toString()})

