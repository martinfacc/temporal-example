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
	'2021-01-01T00:00:00.000[America/Buenos_Aires]'
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

const now = Temporal.ZonedDateTime.from(
	`${Temporal.Now.instant()}[${schedule.timezone}]`
)

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
]

const nowPlusOneHour = now.add({ hours: 1 })
const nowPlusOneDay = now.add({ days: 1 })
const nowPlusOneMinute = now.add({ minutes: 1 })
const nowSubtractOneHour = now.subtract({ hours: 1 })
const nowOnlyTime = now.toPlainTime()
const nowOnlyDate = now.toPlainDate()
const nowOnlyTimeZone = now.timeZone
const nowOnlyDayOfWeek = now.dayOfWeek
const nowOnlyDayName = days[nowOnlyDayOfWeek - 1]
const nowOnlyDay = now.day
const nowOnlyMonth = now.month
const nowOnlyYear = now.year
const nowOnlyHour = now.hour
const nowOnlyMinute = now.minute
const nowOnlySecond = now.second
const nowEqualsFrom = now.equals(from)
const nowEqualsNow = now.equals(now)
const nowSinceFrom = now.since(from)
const nowUntilTo = now.until(to)
const nowCompareToFrom = Temporal.ZonedDateTime.compare(now, from)
const nowCompareToNow = Temporal.ZonedDateTime.compare(now, now)
const nowCompareToTo = Temporal.ZonedDateTime.compare(now, to)
const fromCompareToNow = Temporal.ZonedDateTime.compare(from, now)

console.log({
	from: from.toString(),
	to: to.toString(),
	now: now.toString(),
	nowPlusOneHour: nowPlusOneHour.toString(),
	nowPlusOneDay: nowPlusOneDay.toString(),
	nowPlusOneMinute: nowPlusOneMinute.toString(),
	nowSubtractOneHour: nowSubtractOneHour.toString(),
	nowOnlyTime: nowOnlyTime.toString(),
	nowOnlyDate: nowOnlyDate.toString(),
	nowOnlyTimeZone: nowOnlyTimeZone.toString(),
	nowOnlyDayOfWeek: nowOnlyDayOfWeek,
	nowOnlyDayName: nowOnlyDayName,
	nowOnlyDay: nowOnlyDay,
	nowOnlyMonth: nowOnlyMonth,
	nowOnlyYear: nowOnlyYear,
	nowOnlyHour: nowOnlyHour,
	nowOnlyMinute: nowOnlyMinute,
	nowOnlySecond: nowOnlySecond,
	nowEqualsFrom,
	nowEqualsNow,
	nowSinceFrom: nowSinceFrom.toString(),
	nowUntilTo: nowUntilTo.toString(),
	nowCompareToFrom,
	nowCompareToNow,
	nowCompareToTo,
	fromCompareToNow,
})
