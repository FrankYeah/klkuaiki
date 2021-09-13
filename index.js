// hover

var lesson1up = document.getElementById('lesson1up');
var lesson1down = document.getElementById('lesson1down');
var lesson1downImg = document.getElementById('lesson1downImg');
var lesson1downReport = document.getElementById('lesson1downReport');

var lesson2up = document.getElementById('lesson2up');
var lesson2down = document.getElementById('lesson2down');
var lesson2downImg = document.getElementById('lesson2downImg');
var lesson1downReport2 = document.getElementById('lesson1downReport2');

var lesson3up = document.getElementById('lesson3up');
var lesson3down = document.getElementById('lesson3down');
var lesson3downImg = document.getElementById('lesson3downImg');
var lesson1downReport3 = document.getElementById('lesson1downReport3');

// 1

lesson1up.addEventListener('mouseover', function() {
    lesson1down.style.display = 'block';
})

lesson1up.addEventListener('mouseleave', function() {
    lesson1down.style.display = 'none';
    lesson1down.style.color = 'rgba(255,255,255,0)';
    lesson1downImg.style.opacity = '1';
})

lesson1down.addEventListener('mouseover', function() {
    lesson1down.style.display = 'block';
    lesson1down.style.color = '#96ff3c';
    lesson1downImg.style.opacity = '0.3';
    lesson1downReport.style.display = 'block';
})

lesson1down.addEventListener('mouseleave', function() {
    lesson1down.style.display = 'none';
    lesson1down.style.color = 'rgba(255,255,255,0)';
    lesson1downImg.style.opacity = '1';
    lesson1downReport.style.display = 'none';
})

// 2

lesson2up.addEventListener('mouseover', function() {
    lesson2down.style.display = 'block';
})

lesson2up.addEventListener('mouseleave', function() {
    lesson2down.style.display = 'none';
    lesson2down.style.color = 'rgba(255,255,255,0)';
    lesson2downImg.style.opacity = '1';
})

lesson2down.addEventListener('mouseover', function() {
    lesson2down.style.display = 'block';
    lesson2down.style.color = '#96ff3c';
    lesson2downImg.style.opacity = '0.3';
    lesson1downReport2.style.display = 'block';
})

lesson2down.addEventListener('mouseleave', function() {
    lesson2down.style.display = 'none';
    lesson2down.style.color = 'rgba(255,255,255,0)';
    lesson2downImg.style.opacity = '1';
    lesson1downReport2.style.display = 'none';
})

// 3

lesson3up.addEventListener('mouseover', function() {
    lesson3down.style.display = 'block';
})

lesson3up.addEventListener('mouseleave', function() {
    lesson3down.style.display = 'none';
    lesson3down.style.color = 'rgba(255,255,255,0)';
    lesson3downImg.style.opacity = '1';
})

lesson3down.addEventListener('mouseover', function() {
    lesson3down.style.display = 'block';
    lesson3down.style.color = '#96ff3c';
    lesson3downImg.style.opacity = '0.3';
    lesson1downReport3.style.display = 'block';
})

lesson3down.addEventListener('mouseleave', function() {
    lesson3down.style.display = 'none';
    lesson3down.style.color = 'rgba(255,255,255,0)';
    lesson3downImg.style.opacity = '1';
    lesson1downReport3.style.display = 'none';
})


// 開合

var lesson1 = document.getElementById('lesson1');
var lesson2 = document.getElementById('lesson2');
var lesson3 = document.getElementById('lesson3');
var closeLesson1 = document.getElementById('closeLesson1');
var closeLesson2 = document.getElementById('closeLesson2');
var closeLesson3 = document.getElementById('closeLesson3');

// 開合 lesson 1

lesson1down.addEventListener('click', function() {
    lesson1.style.display = 'flex'
})

closeLesson1.addEventListener('click', function() {
    lesson1.style.display = 'none'
})

// 開合 lesson 2

lesson2down.addEventListener('click', function() {
    lesson2.style.display = 'flex'
})

closeLesson2.addEventListener('click', function() {
    lesson2.style.display = 'none'
})

// 開合 lesson 3

lesson3down.addEventListener('click', function() {
    lesson3.style.display = 'flex'
})

closeLesson3.addEventListener('click', function() {
    lesson3.style.display = 'none'
})


// 新一層

var lesson1Register = document.getElementById('lesson1Register');
var lesson2Register = document.getElementById('lesson2Register');
var lesson3Register = document.getElementById('lesson3Register');

var end1 = document.getElementById('end1');
var end2 = document.getElementById('end2');
var end3 = document.getElementById('end3');

var closedEnd1 = document.getElementById('closedEnd1');
var closedEnd2 = document.getElementById('closedEnd2');
var closedEnd3 = document.getElementById('closedEnd3');


// 新一層 1

lesson1Register.addEventListener('click', function() {
    end1.style.display = 'flex'
})

closedEnd1.addEventListener('click', function() {
    end1.style.display = 'none'
})

// 新一層 2

lesson2Register.addEventListener('click', function() {
    end2.style.display = 'flex'
})

closedEnd2.addEventListener('click', function() {
    end2.style.display = 'none'
})

// 新一層 3

lesson3Register.addEventListener('click', function() {
    end3.style.display = 'flex'
})

closedEnd3.addEventListener('click', function() {
    end3.style.display = 'none'
})

