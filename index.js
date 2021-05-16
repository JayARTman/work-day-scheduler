$(".saveBtn").click(function(){
    let textValue = $(this).siblings(".description").val()
    console.log(textValue);
    let id = $(this).parent().attr("id")
    console.log(id)
    localStorage.setItem(id,textValue)
})

function getSavedItems(){
    let currentHour = moment().hours()
    console.log(currentHour);
    $(".time-block").each(function(){
        console.log("testing");
        let id = $(this).attr("id")
        $(this).find($(".description")).val(localStorage.getItem(id))
        if (currentHour > id){
            $(this).addClass("past")
        }
        else if (currentHour === id){
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
        
    })
}

getSavedItems()