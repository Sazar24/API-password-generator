function getTimeNow() {
    const dateTime = new Date();

    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getMinutes();
    const mSec = dateTime.getMilliseconds();

    const output = `++ ${hours}:${minutes}:${seconds}.${mSec} ++ `;

    return output;
}

module.exports = getTimeNow;