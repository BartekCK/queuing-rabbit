import os
import pika

def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=os.environ['RABBIT_HOST']))
    channel = connection.channel()

    channel.queue_declare(queue=os.environ['QUEUE_NAME'])

    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)

    channel.basic_consume(queue=os.environ['QUEUE_NAME'], on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

main()


