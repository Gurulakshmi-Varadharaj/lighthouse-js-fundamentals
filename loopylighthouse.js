var x = 100;

while (x <= 200) {
  var output = "";
  if (x % 3 === 0 && x % 4 === 0)
    output += "LoopyLighthouse";
  else if (x % 3 === 0)
    output += "Loopy";
  else if (x % 4 === 0)
    output += "Lighthouse";
  else
    output = x;
  x += 1;
  console.log(output);
}