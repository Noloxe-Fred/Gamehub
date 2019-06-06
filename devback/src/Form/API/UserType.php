<?php

namespace App\Form\Api;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        
        $builder
            ->add('email', EmailType::class, [

            ])
            ->add('password', RepeatedType::class, [

                'type' => PasswordType::class,
            ])
            ->add('firstname', TextType::class, [

            ])
            ->add('lastname', TextType::class, [

            ])
            ->add('pseudo', TextType::class, [

            ])
            ->add('photo', UrlType::class, [

            ])
            ->add('birthdate', BirthdayType::class, [

            ])
            ->add('biography', TextareaType::class, [

            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
