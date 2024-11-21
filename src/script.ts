const boxgame = document.querySelector(".boxgame") as HTMLDivElement
const btngame = document.querySelectorAll(".boxgame button") as NodeListOf<HTMLButtonElement>


interface Game {
    Player: boolean,
    Circle: string,
    X: string
}


let Play: Game = {
    Player: true,
    Circle: "O",
    X: "X",
}

btngame.forEach((button, index) => {



    button.addEventListener("click", () => {
        if (button.innerHTML === "") {
            if (Play.Player) {
                button.innerHTML = Play.X

                Play.Player = false

            } else {
                button.innerHTML = Play.Circle

                Play.Player = true

            }

            if (
                btngame[0].innerHTML === "X" &&
                btngame[1].innerHTML === "X" &&
                btngame[2].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"
            }

            if (
                btngame[3].innerHTML === "X" &&
                btngame[4].innerHTML === "X" &&
                btngame[5].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }

            if (
                btngame[6].innerHTML === "X" &&
                btngame[7].innerHTML === "X" &&
                btngame[8].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }

            if (
                btngame[0].innerHTML === "X" &&
                btngame[4].innerHTML === "X" &&
                btngame[8].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }

            if (
                btngame[2].innerHTML === "X" &&
                btngame[4].innerHTML === "X" &&
                btngame[6].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }

            if (
                btngame[0].innerHTML === "X" &&
                btngame[3].innerHTML === "X" &&
                btngame[6].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }

            if (
                btngame[1].innerHTML === "X" &&
                btngame[4].innerHTML === "X" &&
                btngame[7].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }

            if (
                btngame[2].innerHTML === "X" &&
                btngame[5].innerHTML === "X" &&
                btngame[8].innerHTML === "X"
            ) {
                alert("Player X Venceu")
                window.location.href = "/"

            }



            // Player Circle

            if (
                btngame[0].innerHTML === "O" &&
                btngame[1].innerHTML === "O" &&
                btngame[2].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[3].innerHTML === "O" &&
                btngame[4].innerHTML === "O" &&
                btngame[5].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[6].innerHTML === "O" &&
                btngame[7].innerHTML === "O" &&
                btngame[8].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[0].innerHTML === "O" &&
                btngame[4].innerHTML === "O" &&
                btngame[8].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[2].innerHTML === "O" &&
                btngame[4].innerHTML === "O" &&
                btngame[6].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[0].innerHTML === "O" &&
                btngame[3].innerHTML === "O" &&
                btngame[6].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[1].innerHTML === "O" &&
                btngame[4].innerHTML === "O" &&
                btngame[7].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }

            if (
                btngame[2].innerHTML === "O" &&
                btngame[5].innerHTML === "O" &&
                btngame[8].innerHTML === "O"
            ) {
                alert("Player O Venceu")
                window.location.href = "/"

            }





        } else {
            return
        }


    })
})