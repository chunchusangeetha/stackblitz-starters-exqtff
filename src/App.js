import React from 'react';
import './style.css';
import $ from 'jquery';
export default function App() {
  var arr = [];
  $(document).ready(function () {
    $('button').click(function () {
      var item1 = $('#input1').val();
      var item2 = $('#input2').val();

      console.log(item1, '1');
      console.log(item2, '2');
      var elem1 = $('<p></p>').text(item1);
      var elem2 = $('<p></p>').text(item2);
      var newobj = {
        elem1: item1,
        elem2: item2,
      };
      console.log(newobj, '19');
      if (!item1 || !item2) {
        alert('please fill the feilds');
      } else {
        // arr.push(newobj);
        // console.log(arr, 'arr');
        var datas = $('#data');
        datas.append(elem1, elem2);
        $('#input1').val('');
        $('#input2').val('');
        // datas.append(elem2)
        // let showlist = arr.map((item) => <div> {item.newobj} </div>);
        // console.log(showlist, '29');
        // let arrdata = $('#data');
        // console.log(arrdata, '31');
        // arrdata.append(showlist);
      }
    });
  });

  // function showData() {
  //    let datashow = arr.map((item) =>{
  //     return(
  //       <p>{item}</p>
  //     )
  //   })
  //   let arrdata = $("#data")
  //   arrdata.append(datashow)
  // }

  return (
    <div>
      <div>
        <label>Fname</label>
        <input type="text" id="input1" placeholder="enter your fname" /> <br />
        <br />
        <label>Lname</label>
        <input type="text" id="input2" placeholder="enter your fname" />
        <br />
        <br />
        <button id="btn">Add</button>
      </div>
      <div id="data">
        {arr.length > 0 &&
          arr.map((item) => {
            <p> {item.newobj} </p>;
          })}
      </div>
    </div>
  );
}
