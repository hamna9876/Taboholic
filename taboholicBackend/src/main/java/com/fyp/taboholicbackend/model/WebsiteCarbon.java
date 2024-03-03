package com.fyp.taboholicbackend.model;

public class WebsiteCarbon
{
    private int bytes;
    private double cleanerThan;
    private boolean green;
    private String rating;
    private Statistics statistics;
    private long timestamp;
    private String url;

    public WebsiteCarbon(int bytes, double cleanerThan, boolean green, String rating, Statistics statistics, long timestamp, String url) {
        this.bytes = bytes;
        this.cleanerThan = cleanerThan;
        this.green = green;
        this.rating = rating;
        this.statistics = statistics;
        this.timestamp = timestamp;
        this.url = url;
    }

    public int getBytes() {
        return bytes;
    }

    public void setBytes(int bytes) {
        this.bytes = bytes;
    }

    public double getCleanerThan() {
        return cleanerThan;
    }

    public void setCleanerThan(double cleanerThan) {
        this.cleanerThan = cleanerThan;
    }

    public boolean isGreen() {
        return green;
    }

    public void setGreen(boolean green) {
        this.green = green;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public Statistics getStatistics() {
        return statistics;
    }

    public void setStatistics(Statistics statistics) {
        this.statistics = statistics;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    @Override
    public String toString(){
        return "WebsiteCarbon{" +
                "bytes=" + bytes +
                ", cleanerThan=" + cleanerThan +
                ", green=" + green +
                ", rating='" + rating + '\'' +
                ", statistics=" + statistics +
                ", timestamp=" + timestamp +
                ", url='" + url + '\'' +
                '}';
    }
}
