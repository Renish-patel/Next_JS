"use client"
export default function Lecture({params}){
    console.log(params);
    return (
        <div>
            <h1>Days of Collage{params.lectures[0]}</h1>      
            <h1>Lectures per day {params.lectures[1]}</h1>      

         </div>

    )
}