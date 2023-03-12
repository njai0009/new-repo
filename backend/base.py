from flask import Flask, request, jsonify

api = Flask(__name__)

# @api.route('/profile',methods=["POST", "GET"])
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body

@api.route('/profile',methods=["POST"])
def submit_input_value():
    input_value = request.form['inputValue']
    # do something with the input value
    processed_value = input_value.upper()
    response_data = {'response': processed_value}
    return jsonify(response_data)
