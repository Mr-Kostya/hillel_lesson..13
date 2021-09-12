const form = document.getElementById("contactForm");
const table = document.getElementById("table");

const keys = ["name", "surname", "phone"];

const tableRaw = ({ name, surname, phone }) => `
    <td>${name.value}</td>
    <td>${surname.value}</td>
    <td>${phone.value}</td>
`;

const notEmpty = (name, value) => {
    if (!value) {
        alert(`${name} is Required`);
        return false;
    }

    return true;
};

const isNumber = (name, value) => {
    if (!parseInt(value, 10)) {
        alert(`${name} should be the number`);
        return false;
    }

    return true;
};

const formValidation = {
    name: notEmpty,
    surname: notEmpty,
    phone: (name, value) => notEmpty(name, value) && isNumber(name, value)
};

const isFormValid = (form) => keys.every((key) => !!form[key].valid);

function submittingForm(event) {
    event.preventDefault();

    const formInputs = event.target.elements;

    const data = keys.reduce((acc, key) => {
        const input = formInputs[key];

        acc = {
            ...acc,
            [key]: {
                value: input.value,
                valid: formValidation[key](input.name, input.value)
            }
        };
        input.value = "";
        return acc;
    }, {});

    if (!isFormValid(data)) {
        return;
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = tableRaw(data);
    table.appendChild(newRow);
}

form.addEventListener("submit", submittingForm);



// const form = document.getElementById("contactForm");
// const table = document.getElementById("table");
//
// const keys = ["name", "surname", "phone"];
//
// const tableRaw = ({ name, surname, phone }) => `
//     <td>${name}<td>
//     <td>${surname}<td>
//     <td>${phone}<td>
// `;
//
// function submittingForm(event) {
//     event.preventDefault();
//
//     const formInputs = event.target.elements;
//
//     const data = keys.reduce((acc, key) => {
//         const intput = formInputs[key];
//         acc = {
//             ...acc,
//             [key]: intput.value
//         };
//         intput.value = "";
//         if (document.form.intput.value === "") {
//             alert("empty");
//         }
//         return acc;
//     }, {});
//
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = tableRaw(data);
//     table.appendChild(newRow);
// }
//
// form.addEventListener("submit", submittingForm);




// const form = document.querySelector("#contactForm");
// const inputs = document.querySelectorAll(".form_input");
// const cList = document.querySelector(".contacts_list");
// const template = document.querySelector("#textTemplate");
//
// form.addEventListener("submit", submittingForm);
//
// function submittingForm(event) {
//     event.preventDefault();
//     const data = {}
//
//     for (let input of inputs) {
//         data[input.name] = input.value;
//     }
//
//     const contactHtml = template
//         .createElement( "{{Name}}", data.name)
//         .createElement("{{Surname}}", data.surname)
//         .createElement("{{Phone}}", data.phone);
//
//     cList.insertAdjacentHTML("beforeend", contactHtml);
//     for (let input of inputs) {
//         input.value = "";
//     }
// }
//