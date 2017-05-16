/**
 * Created by Aditya Ekawade on 5/14/2017.
 */

import React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from "react-sparklines";
import _ from "lodash";


function average(data) {
    return _.round(_.sum(data)/ data.length);
}

export default (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} limit={20}  data={props.data} unit={props.unit}  >
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine  type="mean" />
                <SparklinesSpots />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    )
}