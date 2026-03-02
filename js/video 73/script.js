function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    function views_convertor(views) {
        if (views >= 1000000) {
            return views / 1000000 + "M"
        }
        else if (views >= 1000 && views < 1000000) {
            return views / 1000 + "K"
        }
        return views
    }

    let main = document.querySelector(".container");
    main.insertAdjacentHTML("beforeend", `<div class="card">
            <div class="card-img">
                <img src="${thumbnail}"
                    width="200px" alt="">
                <p>${duration}</p>
            </div>
            <div class="card-content">
                <h3>
                    ${title}
                </h3>
                <div class="card-spects">
                    <p>${cName}</p>
                    <span>
                        <h3>.</h3>
                    </span>
                    <p>${views_convertor(views)} Views</p>
                    <span>
                        <h3>.</h3>
                    </span>
                    <p>${monthsOld} months ago</p>
                </div>
            </div>
        </div>`);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


createCard("kalu prasad", "lalu prasad", 560, 8, "12:02", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

