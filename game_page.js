var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
var question_turn=player1_name;
var answer_turn=player2_name;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;

function send() {
    var word=document.getElementById("word").value;
    lowercase_word=word.toLowerCase();
    var charat1=lowercase_word.charAt(1);
    var mid=lowercase_word.length/2;
    var charatmid=lowercase_word.charAt(mid);
    var last=lowercase_word.length-1;
    var charat_last=lowercase_word.charAt(last);
    var remove1=lowercase_word.replace(charat1,"_");
    var remove2=remove1.replace(charatmid,"_");
    var final_word=remove2.replace(charat_last,"_");
    var question="<h4 id='word_display'>Q. "+final_word+"</h4>";
    var inputbox="<br>Answer: <input type='text' id='input_check_box'>";
var button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
var  row=question+inputbox+button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=""; 
}

function check() {
var answer=document.getElementById("input_check_box").value;
var lowercase_answer=answer.toLowerCase();
if (lowercase_answer==lowercase_word){
    if (answer_turn==player1_name){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score; 
    }
}
if (question_turn==player1_name){
    question_turn=player2_name;
    answer_turn=player1_name;
    document.getElementById("player_question").innerHTML="Question Turn : "+question_turn;
    document.getElementById("player_answer").innerHTML="Answer Turn : "+answer_turn;
}
else{
question_turn=player1_name;
answer_turn=player2_name;
document.getElementById("player_question").innerHTML="Question Turn : "+question_turn;
document.getElementById("player_answer").innerHTML="Answer Turn : "+answer_turn;
}
document.getElementById("output").innerHTML="";
}