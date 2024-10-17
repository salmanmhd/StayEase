const a = [
  {
    roomNo: 101,
    available: true,
    vacateDate: '',
  },
  {
    roomNo: 102,
    available: false,
    vacateDate: null,
  },
  {
    roomNo: 103,
    available: true,
    vacateDate: '',
  },
  {
    roomNo: 104,
    available: false,
    vacateDate: '12Jan',
  },
  {
    roomNo: 105,
    available: false,
    vacateDate: '12Dec',
  },
];

const ans = a.filter((room) => {
  return room.available === false && room.vacateDate;
});

console.log(ans);
