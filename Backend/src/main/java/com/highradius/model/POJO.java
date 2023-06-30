package com.highradius.model;

import java.util.Date;

public class POJO {
    private int CUSTOMER_ORDER_ID;
    /**
	 * @param CUSTOMER_ORDER_ID
	 * @param SALES_ORG
	 * @param DISTRIBUTION_CHANNEL
	 * @param CUSTOMER_NUMBER
	 * @param COMPANY_CODE
	 * @param ORDER_CURRENCY
	 * @param AMOUNT_IN_USD
	 * @param ORDER_CREATION_DATE
	 */
	public POJO(int CUSTOMER_ORDER_ID, String SALES_ORG, String DISTRIBUTION_CHANNEL, int CUSTOMER_NUMBER,
			String COMPANY_CODE, String ORDER_CURRENCY, double AMOUNT_IN_USD, Date ORDER_CREATION_DATE) 
	{
		super();
		this.CUSTOMER_ORDER_ID = CUSTOMER_ORDER_ID;
		this.SALES_ORG = SALES_ORG;
		this.DISTRIBUTION_CHANNEL = DISTRIBUTION_CHANNEL;
		this.CUSTOMER_NUMBER = CUSTOMER_NUMBER;
		this.COMPANY_CODE = COMPANY_CODE;
		this.ORDER_CURRENCY = ORDER_CURRENCY;
		this.AMOUNT_IN_USD = AMOUNT_IN_USD;
		this.ORDER_CREATION_DATE = ORDER_CREATION_DATE;
	}
	
	private String SALES_ORG;
    private String DISTRIBUTION_CHANNEL;
    private int CUSTOMER_NUMBER;
    private String COMPANY_CODE;
    private String ORDER_CURRENCY;
    private double AMOUNT_IN_USD;
    private Date ORDER_CREATION_DATE;
	/**
	 * @return the CUSTOMER_ORDER_ID
	 */
	public int getCustomerOrderID() {
		return CUSTOMER_ORDER_ID;
	}
	/**
	 * @param CUSTOMER_ORDER_ID the CUSTOMER_ORDER_ID to set
	 */
	public void setCustomerOrderID(int CUSTOMER_ORDER_ID) {
		this.CUSTOMER_ORDER_ID = CUSTOMER_ORDER_ID;
	}
	/**
	 * @return the SALES_ORG
	 */
	public String getSalesOrg() {
		return SALES_ORG;
	}
	/**
	 * @param SALES_ORG the SALES_ORG to set
	 */
	public void setSalesOrg(String SALES_ORG) {
		this.SALES_ORG = SALES_ORG;
	}
	/**
	 * @return the DISTRIBUTION_CHANNEL
	 */
	public String getDistributionChannel() {
		return DISTRIBUTION_CHANNEL;
	}
	/**
	 * @param DISTRIBUTION_CHANNEL the DISTRIBUTION_CHANNEL to set
	 */
	public void setDistributionChannel(String DISTRIBUTION_CHANNEL) {
		this.DISTRIBUTION_CHANNEL = DISTRIBUTION_CHANNEL;
	}
	/**
	 * @return the CUSTOMER_NUMBER
	 */
	public int getCustomerNumber() {
		return CUSTOMER_NUMBER;
	}
	/**
	 * @param CUSTOMER_NUMBER the CUSTOMER_NUMBER to set
	 */
	public void setCustomerNumber(int CUSTOMER_NUMBER) {
		this.CUSTOMER_NUMBER = CUSTOMER_NUMBER;
	}
	/**
	 * @return the COMPANY_CODE
	 */
	public String getCompanyCode() {
		return COMPANY_CODE;
	}
	/**
	 * @param COMPANY_CODE the COMPANY_CODE to set
	 */
	public void setCompanyCode(String COMPANY_CODE) {
		this.COMPANY_CODE = COMPANY_CODE;
	}
	/**
	 * @return the ORDER_CURRENCY
	 */
	public String getOrderCurrency() {
		return ORDER_CURRENCY;
	}
	/**
	 * @param ORDER_CURRENCY the ORDER_CURRENCY to set
	 */
	public void setOrderCurrency(String ORDER_CURRENCY) {
		this.ORDER_CURRENCY = ORDER_CURRENCY;
	}
	/**
	 * @return the AMOUNT_IN_USD
	 */
	public double getAmountUSD() {
		return AMOUNT_IN_USD;
	}
	/**
	 * @param AMOUNT_IN_USD the AMOUNT_IN_USD to set
	 */
	public void setAmountUSD(double AMOUNT_IN_USD) {
		this.AMOUNT_IN_USD = AMOUNT_IN_USD;
	}
	/**
	 * @return the ORDER_CREATION_DATE
	 */
	public Date getOrderCreationDate() {
		return ORDER_CREATION_DATE;
	}
	/**
	 * @param ORDER_CREATION_DATE the ORDER_CREATION_DATE to set
	 */
	public void setOrderCreationDate(Date ORDER_CREATION_DATE) {
		this.ORDER_CREATION_DATE = ORDER_CREATION_DATE;
	}

}