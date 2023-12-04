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


    /**
     * Group all the above in an object and map it
     * apply the good/band counter logic accordingly
     *     const docility = data.docility;
    const fertility = data.fertility;
    const easeOfCalving = data.calving;
    const calfQuality = data.calfquality;
    const milk = data.milk;

    if (docility < 3) {
            goodCounter--;
            badCounter++;
        } else if (docility >= 3) {
            goodCounter++;
            badCounter--;
        }
        console.log(goodCounter)
        console.log(badCounter)
     */

    /** 
        console.log(docility);
        console.log(aggression);
        console.log(fertility);
        console.log(easeOfCalving);
        console.{log(calfQuality);
        console.log(milk);
        */

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
        This means it's betetr to process it by itself instead of in the object.values map above
        In future itterations it would be better to replace aggression with a variable like "calmness, in which a higher score is better.
        This would allow for a sollution which is more efficient and reusable" */
        if (aggression < 3) {
            goodCounter++
        }
        else if (aggression >= 3) {
            badCounter++;
        }
        console.log("good:" + goodCounter);
        console.log("bad:" + badCounter);
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
            <h1>Algorithm Test 1</h1>
            {
                isGood ? <h1>GOOD COW</h1> : <h1>BAD COW</h1>
            }
        </div>
    )
}

export default Algorithm
