export default () => `
<section id ="More">
<form id="register" method="POST" action="">
  <h2> Add a photo to the gallery!</h2>
  <div>
    <h6>Photo URL:</h6>
    <input type="text" name="url" id="url" placeholder="Enter Photo URL" required>
  </div>
  <div>
    <h5>Photo Title/Description:</h5>
    <input type="text" name="title" id="title" placeholder= " Photo Description" required>
  </div>
  <div>
  <input type="submit" class="submit" value="Submit Photo">
  </div>
</form>
`;
