function tabs(tabsSelector, tabsContentSelector,tabsParentSeector,activeClass){
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSeector);

    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item=>{
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e)=>{
        const targ= e.target;
        if(targ && targ.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item,i) => {
                if(targ == item){
                    hideTabContent();
                    showTabContent(i);

                }
            });
        }
    });
}

export default tabs;