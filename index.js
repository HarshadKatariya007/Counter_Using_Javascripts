
function Counter_1()
{
    let Count_Id_1= document.querySelector("#counter_1").innerHTML;
    let Count_1=0;
    let Start_Count_1 = setInterval(()=>
    {
        Count_1 = Count_1+1;
        document.querySelector("#counter_1").innerHTML=Count_1;
        if(Count_1==Count_Id_1)
        {
            clearInterval(Start_Count_1);
        }
    },1);
}
setTimeout(Counter_1,5000);


function Counter_2()
{
    let Count_Id_2=document.querySelector("#counter_2").innerHTML;
    let Count_2=0;
    let Start_Count_2 = setInterval(()=>
    {
        Count_2 = Count_2+1;
        document.querySelector("#counter_2").innerHTML=Count_2;
        if(Count_2==Count_Id_2)
        {
            clearInterval(Start_Count_2);
        }
    },1);
}
setTimeout(Counter_2,7000) 


function Counter_3()
{
    let Counter_Id_3=document.querySelector("#counter_3").innerHTML;
    let Count_3=0;
    let Start_Count_3 = setInterval(()=>
    {
        Count_3 = Count_3+1;
        document.querySelector("#counter_3").innerHTML=Count_3;
        if(Count_3==Counter_Id_3)
        {
            clearInterval(Start_Count_3);
        }
    },1)
}
setTimeout(Counter_3,9000)


function Counter_4()
{
    let Counter_Id_4=document.querySelector("#counter_4").innerHTML;
    let Count_4=0;
    let Start_Count_4 = setInterval(()=>
    {
        Count_4 =Count_4+1;
        document.querySelector("#counter_4").innerHTML=Count_4;
        if(Count_4==Counter_Id_4)
        {
            clearInterval(Start_Count_4);
        }
    },1)
}
setTimeout(Counter_4,12000);
