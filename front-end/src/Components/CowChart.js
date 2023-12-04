import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CowChart = (props) => {
    return (
        <div>
            {/* wont work unless data is wrapped in an array*/}
            <BarChart
                width={500}
                height={300}
                data={[props.data]}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tag" />
                <YAxis type="number" domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Bar name="Docility" dataKey="docility" fill="#2a4b5c" background={{ fill: '#eee' }} />
                <Bar name="Aggression" dataKey="aggression" fill="#006873" background={{ fill: '#eee' }} />
                <Bar name="Fertility" dataKey="fertility" fill="#00846c" background={{ fill: '#eee' }} />
                <Bar name="Ease Of Calving" dataKey="calving" fill="#439b4a" background={{ fill: '#eee' }} />
                <Bar name="Calf Quality" dataKey="calfquality" fill="#9da912" background={{ fill: '#eee' }} />
                <Bar name="Milk Provision" dataKey="milk" fill="#ffa600" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    )
}

export default CowChart
