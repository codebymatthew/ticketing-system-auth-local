const deleteBtn = document.querySelectorAll('.del')
const ticketIdFromJSFileItem = document.querySelectorAll('span.not')
const ticketComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTicket)
})

Array.from(ticketIdFromJSFileItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(ticketComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTicket(){
    const ticketId = this.parentNode.dataset.id
    try{
        const response = await fetch('ticketIdFromJSFiles/deleteTicket', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'ticketIdFromJSFileIdFromJSFile': ticketId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const ticketIdFromJSFileId = this.parentNode.dataset.id
    try{
        const response = await fetch('ticketIdFromJSFiles/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'ticketIdFromJSFileIdFromJSFile': ticketIdFromJSFileId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const ticketIdFromJSFileId = this.parentNode.dataset.id
    try{
        const response = await fetch('ticketIdFromJSFiles/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'ticketIdFromJSFileIdFromJSFile': ticketIdFromJSFileId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}