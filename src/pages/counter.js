import React, { useState, useMemo, useCallback } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = useCallback(() => {
		setCounterOne(counterOne + 1)
	}, [counterOne])

	const incrementTwo = useCallback(() => {
		setCounterTwo(counterTwo + 1)
    }, [counterTwo])

  const isEven = useMemo(() => {
    let i = 0
    while (i < 20000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

	return (
		<div>
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter