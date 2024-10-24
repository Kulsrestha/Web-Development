const addingKey = document.querySelector('#insert');


window.addEventListener('keydown', (e) => {
    addingKey.innerHTML =`
    <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>

</table>
    `;
  });