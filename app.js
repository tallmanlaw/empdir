const employeeList = [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },

  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
const printOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verifyme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#addme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#printme').addClass('show');
};
const verifyOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#printme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#addme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#verifyme').addClass('show');
};
const lookupOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#printme').removeClass('show');
  $('#verifyme').removeClass('show');
  $('#addme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#lookupme').addClass('show');
};
const addOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verifyme').removeClass('show');
  $('#printme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#addme').addClass('show');
};
const updateOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verifyme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#addme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#printme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#updateme').addClass('show');
};
const deleteOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verifyme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#addme').removeClass('show');
  $('#containsme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#printme').removeClass('show');
  $('#deleteme').addClass('show');
};
const containsOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verifyme').removeClass('show');
  $('#lookupme').removeClass('show');
  $('#addme').removeClass('show');
  $('#deleteme').removeClass('show');
  $('#updateme').removeClass('show');
  $('#printme').removeClass('show');
  $('#containsme').addClass('show');
};
//navigation bar turn off other classes and only turn on specified id
$('#print').on('click', printOn);
$('#verify').on('click', verifyOn);
$('#lookup').on('click', lookupOn);
$('#add').on('click', addOn);
$('#contains').on('click', containsOn);
$('#update').on('click', updateOn);
$('#delete').on('click', deleteOn);

$('#print').on('click', function (e) {
  e.preventDefault();
  $('#content').empty();
  employeeList.forEach(e => {
    render(e.name, e.officeNum, e.phoneNum);
  });

});

const LookupIn = function (e) {
  e.preventDefault();
  $('#lookupInput').empty();
  let LookupName = $('#lookupInput').val();
  let lookupok = employeeList.filter(e => e.name === LookupName);
  lookupok.forEach(e => {$('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`)})
};

$('#submitLookup').on('click', LookupIn);

const containsIn = function (e) {
  e.preventDefault();
  $('#containsInput').empty();
  let containsInfo = $('#containsInput').val();
    let contained = employeeList.filter(e =>e.name.toLowerCase().includes(containsInfo)); 
      contained.forEach(e => {$('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`)
    })
  }

$('#submitContains').on('click', containsIn);

// const UpdateIn = function (e) {
//   e.preventDefault();
//   $('#updateme').empty();
// }
//   const eName = $('#updateInput').val();
//   const newNumber = $('#updateInput2').val();
//   if (newNumber === 'office') {
//     const newOfficeNumber = $('#updateInput2').val();
//     for (let i = 0; i < employeeList.length; i++) {
//       if (employeeList[i].name === eName) {
//       let updatedNum = employeeList[i].officeNum = newOfficeNumber
//       updatedNum.forEach(e => {`${e.name} ${e.officeNum} ${e.phoneNum}`});
//       }
//     }
//     }
//    else if (newNumber === 'phone') {
//     const eName = $('#updateInput').val();
//     const newPhoneNumber = $('#updateInput3').val();
//     for (let i = 0; i < employeeList.length; i++) {
//       if (employeeList[i].name === eName) {
//         let updated = employeeList.phoneNum = newPhoneNumber
//           updated.forEach(e => {`${e.name} ${e.officeNum} ${e.phoneNum}`});
//       }
//       }
//     }
//  $('#submitUpdate').on('click', updateIn); 

const addIn = function (e) {
  e.preventDefault();
  $('#addInput').empty();
  let addName = $('#addInput').val();
  let addOffice = $('#addInput2').val();
  let addTele = $('#addInput3').val();
  let addedEmployee = {
        name: addName,
        officeNum: addOffice,
        phoneNum: addTele
      };

      employeeList.push(addedEmployee);
        for (let i = 0; i < employeeList.length; i++) {
          $('#content').append(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
        }
      }

$('#submitAdd').on('click', addIn);


const deleteIn = function (e) {
  e.preventDefault();
  $('#deleteInput').empty();
  deleteInfo = $('#deleteInput').val();

  for (let i = 0; i < employeeList.length; i++) {
    if (deleteInfo === employeeList[i].name) {
      employeeList.splice(i, 1);
      employeeList.forEach(e => {$('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`)
      });
    };
  };
};
$('#submitDelete').on('click', deleteIn);

const verifyIn = function (e) {
  e.preventDefault();
  let msg = 'Employee Not Found';
  $('#verifyInput').empty();
  verifyInfo = $('#verifyInput').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      msg = 'Employee Found';
    }
  }
  $('#content').text(msg);
};

$('#submitVerify').on('click', verifyIn);