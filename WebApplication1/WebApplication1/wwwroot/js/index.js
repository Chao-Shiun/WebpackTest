import '../css/styles.css';
import $ from 'jquery';

// 使用jQuery的代碼
$(document).ready(function() {
    console.log('jQuery is ready!');
});

$("#minimize-button").click(() => {
    alert('Hello from jQuery!');
});