package com.highradius.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.dao.UserDAO;
import com.highradius.dao.UserDaoImpl;
import com.highradius.model.POJO;

@WebServlet("/FetchAllUsers")
public class FetchAllUsersServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private UserDAO userDAO;
    private Gson gson;

    public void init() {
        userDAO = new UserDaoImpl();
        gson = new Gson();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
        	 response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
             response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
             response.setHeader("Access-Control-Allow-Headers", "Content-Type");
            int n = 500; // Default value if parameter is not provided

            // Check if the 'n' parameter is present in the URL
            String nParam = request.getParameter("n");
            if (nParam != null && !nParam.isEmpty()) {
                n = Integer.parseInt(nParam);
            }

            // Fetch top 'n' users from the database
            List<POJO> userList = userDAO.selectAllUsers(n);

            // Convert the userList to JSON string
            String json = gson.toJson(userList);

            // Set the content type to application/json
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            // Write the JSON string as the response
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}