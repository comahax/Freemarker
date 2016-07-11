package controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import freemarker.template.utility.StringUtil;

public class ClientTest{ 
	
	public static List<Map<String,Object>> getData(){
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		Map<String,Object> productMap1=new HashMap<String, Object>();
		  productMap1.put("serial", "1");
		  productMap1.put("main_title", "1GB");
		  productMap1.put("subheading", "7天有效期");
		Map<String,Object> productMap2=new HashMap<String, Object>();
		  productMap2.put("serial", "2");
		  productMap2.put("main_title", "");
		  productMap2.put("subheading", "");
		  productMap2.put("title_img_url", "../images/prize-img-2.png");
		  productMap2.put("content", "xxxxxxxx");
		  productMap2.put("content_img_url", "../images/prize-detail-2.gif");
		  productMap2.put("content_url", "http://www.baidu.com");
		  Map<String,Object> productMap3=new HashMap<String, Object>();
		  productMap3.put("serial", "3");
		  productMap3.put("main_title", "1GB");
		  productMap3.put("subheading", "30天有效期");
		Map<String,Object> productMap4=new HashMap<String, Object>();
			productMap4.put("serial", "4");
			productMap4.put("main_title", "");
			productMap4.put("subheading", "");
			productMap4.put("title_img_url", "../images/prize-img-2.png");
			productMap4.put("content", "xxxxxxxx");
			productMap4.put("content_img_url", "../images/prize-detail-2.gif");
			productMap4.put("content_url", "http://www.baidu.com");
		Map<String,Object> productMap5=new HashMap<String, Object>();
			productMap5.put("serial", "5");
			productMap5.put("main_title", "");
			productMap5.put("subheading", "");
			productMap5.put("title_img_url", "../images/prize-img-2.png");
			productMap5.put("content", "xxxxxxxx");
			productMap5.put("content_img_url", "../images/prize-detail-2.gif");
			productMap5.put("content_url", "http://www.baidu.com");  
			Map<String,Object> productMap6=new HashMap<String, Object>();
			productMap6.put("serial", "1");
			productMap6.put("main_title", "1GB");
			productMap6.put("subheading", "7天有效期");
			Map<String,Object> productMap7=new HashMap<String, Object>();
			productMap7.put("serial", "2");
			productMap7.put("main_title", "");
			productMap7.put("subheading", "");
			productMap7.put("title_img_url", "../images/prize-img-2.png");
			productMap7.put("content", "xxxxxxxx");
			productMap7.put("content_img_url", "../images/prize-detail-2.gif");
			productMap7.put("content_url", "http://www.baidu.com");
			  Map<String,Object> productMap8=new HashMap<String, Object>();
			  productMap8.put("serial", "3");
			  productMap8.put("main_title", "1GB");
			  productMap8.put("subheading", "30天有效期");
			Map<String,Object> productMap9=new HashMap<String, Object>();
			productMap9.put("serial", "4");
			productMap9.put("main_title", "");
			productMap9.put("subheading", "");
			productMap9.put("title_img_url", "../images/prize-img-2.png");
			productMap9.put("content", "xxxxxxxx");
			productMap9.put("content_img_url", "../images/prize-detail-2.gif");
			productMap9.put("content_url", "http://www.baidu.com");
			Map<String,Object> productMap10=new HashMap<String, Object>();
			productMap10.put("serial", "5");
			productMap10.put("main_title", "");
			productMap10.put("subheading", "");
			productMap10.put("title_img_url", "../images/prize-img-2.png");
			productMap10.put("content", "xxxxxxxx");
			productMap10.put("content_img_url", "../images/prize-detail-2.gif");
			productMap10.put("content_url", "http://www.baidu.com");   
				Map<String,Object> productMap11=new HashMap<String, Object>();
				productMap11.put("serial", "1");
				productMap11.put("main_title", "1GB");
				productMap11.put("subheading", "7天有效期");
				Map<String,Object> productMap12=new HashMap<String, Object>();
				productMap12.put("serial", "2");
				productMap12.put("main_title", "");
				productMap12.put("subheading", "");
				productMap12.put("title_img_url", "../images/prize-img-2.png");
				productMap12.put("content", "xxxxxxxx");
				productMap12.put("content_img_url", "../images/prize-detail-2.gif");
				productMap12.put("content_url", "http://www.baidu.com");
				
		  list.add(productMap1);
		  list.add(productMap2);
		  list.add(productMap3);
		  list.add(productMap4);
		  list.add(productMap5);
		  list.add(productMap6);
		  list.add(productMap7);
		  list.add(productMap8);
		  list.add(productMap9);
		  list.add(productMap10);
		  list.add(productMap11);
		  list.add(productMap12);
		  return list;
	}
	
	
	
	 public static void main(String[] args){  
	    
	  Map<String,Object> root=new HashMap<String, Object>();  
	  root.put("titel", "测试");  
	  
	  List<Map<String,Object>> list  = getData();
	  for(int i=0;i<list.size();i++){
		  String str ="";
		  String classImg = "";
		  if(i==4||i==5||i==6||i==7){
			  classImg = "<img src=\"../images/rectangle-normal.png\" alt=\"\"/>";
		  }else{
			  classImg = "<img src=\"../images/square-normal.png\" alt=\"\"/>";
		  }
		  Map<String,Object> map = list.get(i);
		  	if(map.get("content_url")!= null&&map.get("content")!= null){
		  		//使用按钮图片
		  		  str = "<td class=\"dial-item\" data-dial-id=\""+(String)map.get("serial")+"\"  data-obj=\"{title:'"+(String)map.get("content")+"',imgSrc:'"+(String)map.get("content_img_url")+"',imgUrl:'"+(String)map.get("content_url")+"'}\">"+
		  				classImg +
	                 "<div class=\"prize-desc\">"+
	                     "<img src=\""+(String)map.get("title_img_url")+"\" />"+
	                 "</div>"+
	             "</td>";
		  		 System.out.println(str);
		  	}else{
		  		 str = "<td class=\"dial-item\" data-dial-id=\""+(String)map.get("serial")+"\">"+
		  				classImg+
		                 "<div class=\"prize-desc\">"+
		                     "<p class=\"red-num\">"+(String)map.get("main_title")+"</p>"+
                             "<p class=\"color-purple\">"+(String)map.get("subheading")+"</p>"+
		                 "</div>"+
		             "</td>";
		  		System.out.println(str);
		  	}
		  	root.put("productMap"+i, str);
	  }
//	  String templatesPath="D:/DevPlateForm/Eclipse/workspaces/freeMakerTest/src/templates";  
	  String templatesPath="C:/webTingWorkSpace/freeMarkerDemo/WebContent/WEB-INF/new2016/bigwheel";  
	  String templateFile="/user.ftl";  
	  String htmlFile=templatesPath+"/user.html";  
	  FreeMarkerUtil.analysisTemplate(templatesPath,templateFile,htmlFile,root);  
	}  
} 
