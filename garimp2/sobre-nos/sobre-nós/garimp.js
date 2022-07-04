function goToStep2(){

    let step1= document.getElementById('step1');
    step1.style.display='none';
    
    let step2= document.getElementById('step2');
    step2.style.display='flex';

   /*  let btn= document.getElementById('continueStep1');
    btn.style.display='none';

    let btnStep2= document.getElementById('continueStep2');
    btnStep2.style.display='initial';

    let btnBackStep2= document.getElementById('voltarStep2');
    btnBackStep2.style.display='initial'; */

}

function backToStep1(){
    let step1= document.getElementById('step1');
    step1.style.display='flex';
    
    let step2= document.getElementById('step2');
    step2.style.display='none';


}

function backToStep2(){
    let step2= document.getElementById('step2');
    step2.style.display='flex';
    
    let step3= document.getElementById('step3');
    step3.style.display='none';


}

function goToStep3(){
    let step1= document.getElementById('step2');
    step1.style.display='none';
    
    let step2= document.getElementById('step3');
    step2.style.display='flex';

}

function register() {
    let headers = new Headers({
        'Content-Type': 'application/json',
      });

    const body = getFormValue()
    fetch('http://localhost:8080/usuarios', {method: 'post', body: JSON.stringify(body), headers: headers})
    .then((res => {
        console.log(res),
        alert('Deu certo')
    }))
    .catch((e) => {
        console.log(e),
        alert('Deu errado')
    })
}

function getFormValue() {

    const elements = Array.from(document.querySelectorAll("#form-login input"))
    console.log(elements)

    const elementsNamed = elements.reduce((prev, element) => 
        {
            prev[element.id] = element.value
            console.log(prev[element.id])
            return prev
        },
        {}
    ) 
    return elementsNamed
}