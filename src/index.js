import _ from 'lodash';
import './style.css';

const openNavButton = document.getElementById('btn-open-nav');
openNavButton.addEventListener('click', openNav);

function openNav(){
  openNavButton.classList.toggle('active');
}