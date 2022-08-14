const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: '08:11',
        destination: 'OMAN',
        flight: 'OX 203',
        gate: ' A 01 ',
        remarks: 'ON TIME'
    },
    {
        time: '10:20',
        destination: 'LONDON',
        flight: 'FX 400',
        gate: 'C 03 ',
        remarks: 'CANCELLED'
    },
    {
        time: '12:39',
        destination: 'BISHKEK',
        flight: 'DXB 201',
        gate: 'B 19',
        remarks: 'CANCELLED'
    },
    {
        time: '15:25',
        destination: 'SAN-FRANCISCO',
        flight: 'SF 211',
        gate: 'A 32',
        remarks: 'DELAYED'
    },
    {
        time: '22:01',
        destination: 'ISTANBUL',
        flight: 'TR 107',
        gate: 'B 02',
        remarks: 'ON TIME'
    }
]

const destinations = ['OMAN', 'LONDON', 'BISHKEK', 'SAN-FRANCISCO', 'ISTANBUL', 'OSH']
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
let hour = 22

function populationTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement) 
                }, 100 * index)

            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}
populationTable()

function generateRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = '123456789'
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour 
    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = '0' + hour
    }

    return displayHour + ':' + generateRandomNumber() + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + ' ' + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ''
    populationTable() ///here might be mistake
}

setInterval(shuffleUp, 4000)