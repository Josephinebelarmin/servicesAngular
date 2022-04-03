export class CounterService{
    activeToInactiveCounter = 0;
    inActiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log("Active to InActive is  " +this.activeToInactiveCounter)
    }

    incrementInActiveToActive(){
        this.inActiveToActiveCounter++;
        console.log("InActive to Active is  " +this.inActiveToActiveCounter)
    }
}