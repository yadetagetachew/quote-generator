const quoteList = [{
    quote : "Learn as if you will live forever, live like you will die tomorrow.",
    source : "— Mahatma Gandhi"},
{
    quote : "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source : "— Winston S. Churchill"},
{
    quote : "It is better to fail in originality than to succeed in imitation.",
    source :"— Herman Melville"},
{
    quote : "I never dreamed about success. I worked for it.",
    source :"— Estée Lauder"},
{
    quote : "Don't let yesterday take up too much of today.",
    source :"— Will Rogers"},
{
    quote : "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    source :"— Steve Jobs"},
{
    quote : "When we strive to become better than we are, everything around us becomes better too.",
    source :"— Paulo Coelho"},
{
    quote : "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    source :"— George Lorimer"},
{
    quote : "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
    source :"— Augustine Og Mandino"},
{
    quote : "Be a positive energy trampoline, absorb what you need and rebound more back.",
    source :"— Dave Carolan"},
{
    quote : "Don't gain the world and lose your soul, wisdom is better than silver or gold.",
    source :"— Bob Marley"},
{
    quote : "Luck is just being prepared at all times, so when the door opens you're ready.",
    source :"— Nipsey Hussle"},
{
    quote : "Pain doesn't tell you when you ought to stop. Pain is the little voice in your head that tries to hold you back because it knows if you continue you will change.",
    source :"— Kobe Bryant"},
{
    quote : "The most important thing is to try and inspire people, so that they can be great in whatever they want to do",
    source :"— Kobe Bryant"}]


 document.getElementById('generator-button').addEventListener('click', generator)

function generator(){
let random = quoteList[Math.floor(Math.random() * quoteList.length)]

document.getElementById('quote').innerHTML = '"' + random.quote + '"'
document.getElementById('author').innerHTML = random.source
}
generator()



