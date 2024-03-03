package com.fyp.taboholicbackend.model;

public class Statistics {
    private double adjustedBytes;
    private CO2 co2;
    private double energy;

    public double getAdjustedBytes() {
        return adjustedBytes;
    }

    public void setAdjustedBytes(double adjustedBytes) {
        this.adjustedBytes = adjustedBytes;
    }

    public CO2 getCo2() {
        return co2;
    }

    public void setCo2(CO2 co2) {
        this.co2 = co2;
    }

    public double getEnergy() {
        return energy;
    }

    public void setEnergy(double energy) {
        this.energy = energy;
    }

}
