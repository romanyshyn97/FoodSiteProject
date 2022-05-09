import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import slider from './modules/slider';
import calc from './modules/calc';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded' , ()=>{
          
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 300000);

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimer);
    timer('.timer', '2022-06-06');
    cards();
    calc();
    forms('form', modalTimer);
    slider({
        container:'.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    
});