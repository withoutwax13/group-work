package time_util

import (
	"time"
)

const (
	apiDateLayout = "2006-01-02T15:04:05"
)

// GetNow return a time.Time with current time.
func GetNow() time.Time {
	return time.Now().UTC()
}

// GetNowString return the current time in string.
func GetNowString() string {
	return GetNow().Format(apiDateLayout)
}
