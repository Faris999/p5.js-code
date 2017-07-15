var popSize = 500;
var population = [];
var fitness = [];

var recordDistanceGA = Infinity;
var bestEverGA;
var currentBestGA;

function setupGA() {
    var order = [];
    for (var i = 0; i < totalCities; i++) {
        order[i] = i;
    }

    for (var i = 0; i < popSize; i++) {
        population[i] = shuffle(order);
    }
}

function drawGA() {
    translate(0, 0);
    calculateFitness();
    normalizeFitness();
    nextGeneration();

    fill(255);
    for (var i = 0; i < bestEverGA.length; i++) {
        var n = bestEverGA[i];
        ellipse(cities[n].x, cities[n].y, 8, 8);
    }

    stroke(255, 0, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (var i = 0; i < bestEverGA.length; i++) {
        var n = bestEverGA[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

    translate(0, height / 2);
    fill(255);
    noStroke();
    for (var i = 0; i < bestEverGA.length; i++) {
        var n = bestEverGA[i];
        ellipse(cities[n].x, cities[n].y, 8, 8);
    }

    stroke(255, 0, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (var i = 0; i < currentBestGA.length; i++) {
        var n = currentBestGA[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();
}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points, order) {
    var sum = 0;
    for (var i = 0; i < order.length - 1; i++) {
        var cityAIndex = order[i];
        var cityA = points[cityAIndex];
        var cityBIndex = order[i + 1];
        var cityB = points[cityBIndex];
        var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}

function calculateFitness() {
    var currentRecord = Infinity;
    for (var i = 0; i < population.length; i++) {
        var d = calcDistance(cities, population[i]);
        if (d < recordDistanceGA) {
            recordDistanceGA = d;
            console.log('ga: ' + recordDistanceGA);
            bestEverGA = population[i];
        }
        if (d < currentRecord) {
            currentRecord = d;
            currentBestGA = population[i];
        }



        fitness[i] = 1 / (d + 1);
    }
}

function normalizeFitness() {
    var sum = 0;
    for (var i = 0; i < fitness.length; i++) {
        sum += fitness[i];
    }
    for (var i = 0; i < fitness.length; i++) {
        fitness[i] = fitness[i] / sum;;
    }
}

function nextGeneration() {
    var newPopulation = [];
    for (var i = 0; i < population.length; i++) {
        var orderA = pickOne(population, fitness);
        var orderB = pickOne(population, fitness);
        var order = crossOver(orderA, orderB);
        mutate(order, 0.01);
        newPopulation[i] = order;
    }
    population = newPopulation;

}

function pickOne(list, prob) {
    var index = 0;
    var r = random(1);

    while (r > 0) {
        r = r - prob[index];
        index++;
    }
    index--;
    return list[index].slice();
}

function crossOver(orderA, orderB) {
    var start = floor(random(orderA.length));
    var end = floor(random(start + 1, orderA.length));
    var neworder = orderA.slice(start, end);
    // var left = totalCities - neworder.length;
    for (var i = 0; i < orderB.length; i++) {
        var city = orderB[i];
        if (!neworder.includes(city)) {
            neworder.push(city);
        }
    }
    return neworder;
}

function mutate(order, mutationRate) {
    for (var i = 0; i < totalCities; i++) {
        if (random(1) < mutationRate) {
            var indexA = floor(random(order.length));
            var indexB = (indexA + 1) % totalCities;
            swap(order, indexA, indexB);
        }
    }
}
