window.addEventListener('DOMContentLoaded' , ()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e)=>{
        const targ= e.target;
        if(targ && targ.classList.contains('tabheader__item')){
            tabs.forEach((item,i) => {
                if(targ == item){
                    hideTabContent();
                    showTabContent(i);

                }
            });
        }
    });
    

});