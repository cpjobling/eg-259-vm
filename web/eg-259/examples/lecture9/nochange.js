// The event handler function to compute the cost

var computeCost = function() {
  var french = document.getElementById("french").value;
  var hazlenut = document.getElementById("hazlenut").value;
  var columbian = document.getElementById("columbian").value;

  // Compute the cost

  document.getElementById("cost").value = totalCost = french * 3.49 + hazlenut * 3.95 + columbian * 4.59;
};

document.getElementById("total_cost").onclick = computeCost;