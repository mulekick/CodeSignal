function domainType(domains) {

    var arrDomainTypes = [];
    var arrDomainWordings = [];
    var arrDomain;
    var counter;
    
    arrDomainWordings["com"] = "commercial";
    arrDomainWordings["org"] = "organization";
    arrDomainWordings["net"] = "network";
    arrDomainWordings["info"] = "information";
    
    for (counter = 0; counter < domains.length; counter++) {
        arrDomain = domains[counter].split(".");
        arrDomainTypes.push(arrDomainWordings[arrDomain[arrDomain.length - 1]]);
    }

    return arrDomainTypes;
    
}
