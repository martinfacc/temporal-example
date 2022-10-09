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

const instant = zonedDateTime.toInstant()

console.log(instant.toString())

const schedule = {
	from: '09:00',
	to: '20:00',
	timezone: 'America/Buenos_Aires',
}

// today at 9:00
const from = Temporal.ZonedDateTime.from(
	`${Temporal.Now.plainDateISO()}T${schedule.from}[${schedule.timezone}]`
)
// today at 20:00
const to = Temporal.ZonedDateTime.from(
	`${Temporal.Now.plainDateISO()}T${schedule.to}[${schedule.timezone}]`
)

console.log({
	from: from.toString(),
	to: to.toString(),
})
