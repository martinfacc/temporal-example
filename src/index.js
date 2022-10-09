import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill'

Date.prototype.toTemporalInstant = toTemporalInstant

// const now = Temporal.Now.plainDateTimeISO()

// const yesterday = now.subtract({ days: 1 })

// const tomorrow = now.add({ days: 1 })

// console.log({
// 	now: now.toString(),
// 	yesterday: yesterday.toString(),
// 	tomorrow: tomorrow.toString(),
// })

const zonedDateTime = Temporal.ZonedDateTime.from(
	'2021-01-01T08:00[America/Buenos_Aires]'
)

console.log(zonedDateTime.toString())
