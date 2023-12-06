document.addEventListener('DOMContentLoaded',function(e){
    document.body.addEventListener('click', function(e){
        if(e.target.closest('#notify-btn'))
        {
            let notifyInp = document.querySelector('#notify-inp').value;
            
            let notifyType = document.querySelector('#notify-type').value;

            notify(notifyInp, notifyType, 5);

        }
    });
});

function notify(text, type = 'info', duration = 5)
{
    let container = document.querySelector('.notify-container');
    if(!container)
    {
        container = document.createElement('div');
        container.classList.add('notify-container');
        document.body.append(container);
    }
        

    const notifyEl = document.createElement('div');

    notifyEl.classList.add('notify', type);
    notifyEl.innerHTML = text;
    container.append(notifyEl);

    setTimeout(() => {
        
        notifyEl.style.animation = `end-slide 1.1s`;

        setTimeout(() => {
            notifyEl.remove();
            if(container.children.length == 0)
            {
                container.remove();
            }
        }, 1000)
},duration*1000)
}