function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var days = 0;
    var height = 0;
    
    do {
        height += upSpeed;
        days++;
        if (height >= desiredHeight)
            break;
        
        height -= downSpeed;        
    } while (height < desiredHeight)
    
    return days;
}
