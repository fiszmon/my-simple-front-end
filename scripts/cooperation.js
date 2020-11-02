function create_list(){
    const container = document.getElementsByClassName("container")[0];

    for(let i=0; i<data.length; ++i){
        let coop = document.createElement("DIV");
        coop.className = "coop";
        let logo_d = document.createElement("DIV");
        logo_d.className = "logo";
        let img = document.createElement("IMG");
        let src = document.createAttribute("src");
        src.value = data[i].logo_path;
        img.setAttributeNode(src);
        logo_d.appendChild(img);
        coop.appendChild(logo_d);
        let h2 = document.createElement("H2");
        h2.innerText = data[i].name;
        coop.appendChild(h2);
        let p = document.createElement("P");
        p.innerText = data[i].description;
        coop.appendChild(p);
        let btn = document.createElement("BUTTON");
        btn.className = "button";
        btn.innerText = "See more";
        coop.appendChild(btn);
        coop.innerHTML += data[i].creator_link;

        container.appendChild(coop);
    }
}

data = [
    {
        logo_path: "./images/macrovector_1.jpg",
        name: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere nulla sed dapibus pellentesque. " +
            "                Aenean facilisis dolor at lorem ornare cursus. Sed justo felis, suscipit in nulla ultrices, " +
            "                luctus posuere elit. Nunc ultricies risus dapibus consequat consectetur. " +
            "                Aenean rhoncus laoreet erat sed rhoncus. Praesent ut scelerisque quam, id mattis elit. " +
            "                Sed eget nisi efficitur, pretium augue sed, elementum massa. " +
            "                Cras aliquet turpis bibendum metus imperdiet, blandit molestie ligula pulvinar.",
        creator_link: "<a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by macrovector - www.freepik.com</a>"
    },
    {
        logo_path: "./images/sentavio_1.jpg",
        name: "Morbi vel gravida est.",
        description: "Morbi vel gravida est. Mauris mollis viverra nisi, a pellentesque libero pretium id. " +
            "Etiam ultrices ornare libero at eleifend. Aliquam nec pulvinar nisi. " +
            "Maecenas consectetur mauris ac dignissim ornare. Donec sed ligula odio. " +
            "Nulla tempor odio vel felis luctus, id bibendum massa condimentum. " +
            "Aliquam sagittis pellentesque mauris vitae dapibus. Cras tortor quam, " +
            "laoreet quis erat eget, tempus sodales mauris. Proin fringilla mi arcu, " +
            "a suscipit eros scelerisque non. Maecenas rhoncus placerat magna in vehicula.",
        creator_link: "<a href='https://www.freepik.com/vectors/leaf'>Leaf vector created by sentavio - www.freepik.com</a>"
    },
    {
        logo_path: "./images/macrovector_1.jpg",
        name: "Phasellus gravida, lectus nec suscipit vestibulum",
        description: "Phasellus gravida, lectus nec suscipit vestibulum, nulla ligula suscipit ipsum, " +
            "vitae tincidunt augue neque ut nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. " +
            "Quisque magna libero, eleifend faucibus porta aliquam, gravida ut mi. Nunc malesuada dignissim pellentesque. " +
            "Maecenas risus quam, tristique sagittis nisi eget, mattis condimentum ipsum. " +
            "Proin ornare magna nec porta maximus. Morbi bibendum pharetra ligula eu faucibus. Sed venenatis ullamcorper congue.",
        creator_link: "<a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by macrovector - www.freepik.com</a>"
    },
    {
        logo_path: "./images/sentavio_1.jpg",
        name: "Fusce facilisis, tellus ac porttitor vulputate",
        description: "Fusce facilisis, tellus ac porttitor vulputate, sapien ligula aliquam lectus, " +
            "quis suscipit enim nibh ac libero. Phasellus lobortis consectetur ligula nec fermentum. " +
            "Sed at imperdiet leo. Vivamus quis lacus vel sapien interdum consequat. Integer facilisis fringilla " +
            "purus ac blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; " +
            "In imperdiet lacus vehicula nulla condimentum, sed imperdiet nibh dapibus.",
        creator_link: "<a href='https://www.freepik.com/vectors/leaf'>Leaf vector created by sentavio - www.freepik.com</a>"
    },
    {
        logo_path: "./images/macrovector_1.jpg",
        name: "Proin tempor ex sit amet tempor laoreet",
        description: "Proin tempor ex sit amet tempor laoreet. Etiam nibh erat, gravida id luctus eu, faucibus quis orci. " +
            "Pellentesque sed justo dictum, pulvinar nulla eu, fermentum enim. Sed mollis et justo vel elementum. " +
            "Etiam convallis orci vitae purus lobortis, in molestie augue blandit. Phasellus placerat sit amet ligula " +
            "at varius. Curabitur libero tellus, rhoncus non elit dignissim, pharetra varius magna. Integer convallis " +
            "a enim vitae accumsan. Pellentesque luctus, turpis vel ullamcorper lacinia, justo ex commodo turpis, id " +
            "scelerisque nulla ipsum in nisi. Fusce vehicula libero non tortor laoreet, at tristique lectus ullamcorper. " +
            "Quisque massa velit, rutrum non lacinia vitae, accumsan sit amet metus.",
        creator_link: "<a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by macrovector - www.freepik.com</a>"
    },
    {
        logo_path: "./images/sentavio_1.jpg",
        name: "Donec vitae laoreet magna.",
        description: "Donec vitae laoreet magna. Praesent eu volutpat eros. Curabitur nec pretium massa, placerat " +
            "efficitur purus. Nam vulputate mauris eu est rutrum, a scelerisque enim pretium. Duis et lobortis nunc. " +
            "Suspendisse a massa nec est imperdiet aliquam a vitae tellus. Suspendisse at elementum libero, " +
            "eu sodales elit. Pellentesque consectetur pulvinar tempus. Integer tempor elit non lacinia imperdiet. " +
            "Vivamus auctor, arcu et lobortis tristique, velit eros sollicitudin ante, id auctor lectus orci quis odio. " +
            "Etiam euismod suscipit orci. Phasellus elementum sapien tellus, eu luctus mi mattis sed. Pellentesque " +
            "pulvinar ex ac pretium fermentum. Vestibulum at aliquam sapien, sed viverra quam. " +
            "Nulla faucibus nisl vitae metus porttitor dignissim.",
        creator_link: "<a href='https://www.freepik.com/vectors/leaf'>Leaf vector created by sentavio - www.freepik.com</a>"
    }
]
