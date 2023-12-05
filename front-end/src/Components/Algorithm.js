import React, { useState } from 'react'

const Algorithm = (props) => {


    console.log("algo")

    const data = props.data;

    let goodCounter = 0;
    let badCounter = 0;
    let isGood = true;

    const cowObj = {
        docility: data.docility,
        //aggression: data.aggression,
        fertility: data.fertility,
        easeOfCalving: data.calving,
        calfQuality: data.calfquality,
        milk: data.milk,
    }

    const getBreedingStatus = () => {
        //aggression variable is processed seperately, see below.
        const aggression = data.aggression;

        //array loops through values
        Object.values(cowObj).map((item) => {
            if (item < 3) {
                badCounter++;
            }
            else if (item >= 3) {
                goodCounter++;
            }
        })

        /* Aggression is the one variable in which a lower score is preferable.
        This means it's better to process it by itself instead of in the object.values map above
        In future itterations it would be better to replace aggression with a variable like "calmness, in which a higher score is better.
        This would allow for a sollution which is more efficient and reusable" */
        if (aggression < 3) {
            goodCounter++
        }
        else if (aggression >= 3) {
            badCounter++;
        }

        if (goodCounter >= 3) {
            isGood = true;
            console.log("good " + isGood)
        }
        else {
            isGood = false;
            console.log("bad " + isGood)
        }

    }

    getBreedingStatus();

    return (
        <div>
            <h4>Breeding Status</h4>
            {
                isGood ? <p className='Good-Text'>This animal has favourable characteristics and is recommeded for breeding</p> : <p className='Bad-Text'>This animal is not recommeded for breeding due to unfavouable characteristics.</p>
            }
        </div>
    )
}

export default Algorithm
